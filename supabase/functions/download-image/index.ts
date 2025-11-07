import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageUrl, fileName } = await req.json();
    
    console.log(`[DOWNLOAD] Baixando imagem: ${imageUrl}`);
    
    // Fazer download da imagem
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/*',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    console.log(`[DOWNLOAD] Blob baixado: ${blob.size} bytes`);
    
    // Upload para o storage usando o cliente Supabase
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );
    
    const { data, error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(fileName, blob, {
        contentType: blob.type,
        upsert: true
      });
    
    if (uploadError) {
      throw new Error(`Upload falhou: ${uploadError.message}`);
    }
    
    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(fileName);
    
    console.log(`[DOWNLOAD] ✅ Sucesso! URL: ${publicUrl}`);
    
    return new Response(
      JSON.stringify({ publicUrl }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('[DOWNLOAD] Erro:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
