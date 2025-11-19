# Configuração de Campos ACF para Testes

Este documento explica como configurar os campos personalizados (ACF) para criar testes totalmente configuráveis no WordPress.

## 📋 Campos Obrigatórios

### 1. **Perguntas do Teste**
- **Nome do Campo**: `perguntas`
- **Tipo**: Repeater
- **Localização**: Post Type "Testes"

#### Sub-campo:
- **Nome**: `texto_da_pergunta`
- **Tipo**: Text Area
- **Obrigatório**: Sim

---

## ⚙️ Campos Opcionais (com valores padrão)

### 2. **Opções de Resposta Personalizadas**
- **Nome do Campo**: `opcoes_resposta`
- **Tipo**: Repeater
- **Descrição**: Define as opções de resposta e seus valores de pontuação

#### Sub-campos:
- **Nome**: `texto_opcao`
  - **Tipo**: Text
  - **Exemplo**: "Raramente", "Frequentemente"
  
- **Nome**: `valor_opcao`
  - **Tipo**: Number
  - **Exemplo**: 0, 0.2, 1.0, 1.35
  - **Formato**: Permitir decimais

**Se não configurado**, usa valores padrão:
```php
[
    [ 'text' => 'Raramente', 'value' => 0 ],
    [ 'text' => 'Algumas Vezes', 'value' => 0.2 ],
    [ 'text' => 'Frequentemente', 'value' => 1.0 ],
    [ 'text' => 'Muito Frequentemente', 'value' => 1.35 ],
]
```

---

### 3. **Pontuação Média de Referência**
- **Nome do Campo**: `pontuacao_media`
- **Tipo**: Number
- **Descrição**: Pontuação média usada para comparar resultados
- **Formato**: Permitir decimais
- **Valor padrão**: `4.6`

**Exemplo de uso**:
- Se a pontuação do usuário for **maior** que este valor: mensagem "acima da média"
- Se a pontuação do usuário for **menor ou igual**: mensagem "abaixo da média"

---

### 4. **Mensagens de Resultado Personalizadas**
- **Nome do Campo**: `mensagens_resultado`
- **Tipo**: Repeater
- **Descrição**: Define mensagens diferentes baseadas na pontuação

#### Sub-campos:
- **Nome**: `condicao`
  - **Tipo**: Select
  - **Opções**:
    - `abaixo` - "Pontuação abaixo ou igual à média"
    - `acima` - "Pontuação acima da média"

- **Nome**: `titulo_resultado`
  - **Tipo**: Text
  - **Exemplo**: "Resultado Positivo", "Consulta Recomendada"

- **Nome**: `descricao_resultado`
  - **Tipo**: Textarea
  - **Exemplo**: "Sua pontuação indica sintomas significativos. Recomendamos agendar uma consulta."

**Se não configurado**, usa mensagens padrão:
- **Acima da média**: "Sua pontuação está acima da média, o que pode indicar a presença de sintomas significativos. Recomendamos que você agende uma consulta com um especialista."
- **Abaixo da média**: "Sua pontuação está dentro ou abaixo da média. No entanto, se você ainda está preocupado com os sintomas, recomendamos uma consulta com um especialista."

---

### 5. **Número do WhatsApp**
- **Nome do Campo**: `whatsapp_numero`
- **Tipo**: Text
- **Descrição**: Número de WhatsApp para agendamento de consultas
- **Formato**: Incluir código do país (ex: 5511941543929)
- **Valor padrão**: `5511941543929`

---

## 🎯 Exemplo de Configuração Completa

### Teste de TDAH - Configuração ACF

#### Perguntas (6 perguntas):
1. "Com que frequência você tem dificuldade para se concentrar?"
2. "Com que frequência você se sente inquieto ou agitado?"
3. ...

#### Opções de Resposta:
| Texto | Valor |
|-------|-------|
| Nunca | 0 |
| Raramente | 0.3 |
| Às vezes | 0.7 |
| Frequentemente | 1.2 |
| Sempre | 1.5 |

#### Pontuação Média:
`5.0`

#### Mensagens de Resultado:

**Mensagem 1** (Abaixo da média):
- **Condição**: `abaixo`
- **Título**: "Sintomas Leves"
- **Descrição**: "Sua pontuação indica sintomas leves ou ausentes. Se persistirem preocupações, consulte um especialista."

**Mensagem 2** (Acima da média):
- **Condição**: `acima`
- **Título**: "Sintomas Significativos"
- **Descrição**: "Sua pontuação sugere a presença de sintomas significativos de TDAH. Recomendamos fortemente uma avaliação profissional."

#### WhatsApp:
`5511912345678`

---

## 🔧 Instruções de Instalação dos Campos ACF

### Método 1: Interface ACF (Recomendado para iniciantes)

1. Acesse **WordPress Admin > Campos Personalizados > Adicionar Novo**
2. Nomeie o grupo: **"Configurações do Teste"**
3. Configure a localização:
   - **Tipo de Post** = **Testes**
4. Adicione cada campo conforme descrito acima

### Método 2: Código PHP (Avançado)

Adicione ao `functions.php` do tema:

```php
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
    'key' => 'group_testes_config',
    'title' => 'Configurações do Teste',
    'fields' => array(
        // Perguntas
        array(
            'key' => 'field_perguntas',
            'label' => 'Perguntas',
            'name' => 'perguntas',
            'type' => 'repeater',
            'required' => 1,
            'sub_fields' => array(
                array(
                    'key' => 'field_texto_pergunta',
                    'label' => 'Texto da Pergunta',
                    'name' => 'texto_da_pergunta',
                    'type' => 'textarea',
                    'required' => 1,
                ),
            ),
        ),
        // Opções de Resposta
        array(
            'key' => 'field_opcoes_resposta',
            'label' => 'Opções de Resposta',
            'name' => 'opcoes_resposta',
            'type' => 'repeater',
            'sub_fields' => array(
                array(
                    'key' => 'field_texto_opcao',
                    'label' => 'Texto da Opção',
                    'name' => 'texto_opcao',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_valor_opcao',
                    'label' => 'Valor da Opção',
                    'name' => 'valor_opcao',
                    'type' => 'number',
                    'step' => 0.01,
                ),
            ),
        ),
        // Pontuação Média
        array(
            'key' => 'field_pontuacao_media',
            'label' => 'Pontuação Média de Referência',
            'name' => 'pontuacao_media',
            'type' => 'number',
            'step' => 0.1,
            'default_value' => 4.6,
        ),
        // Mensagens de Resultado
        array(
            'key' => 'field_mensagens_resultado',
            'label' => 'Mensagens de Resultado',
            'name' => 'mensagens_resultado',
            'type' => 'repeater',
            'sub_fields' => array(
                array(
                    'key' => 'field_condicao',
                    'label' => 'Condição',
                    'name' => 'condicao',
                    'type' => 'select',
                    'choices' => array(
                        'abaixo' => 'Pontuação abaixo ou igual à média',
                        'acima' => 'Pontuação acima da média',
                    ),
                ),
                array(
                    'key' => 'field_titulo_resultado',
                    'label' => 'Título do Resultado',
                    'name' => 'titulo_resultado',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_descricao_resultado',
                    'label' => 'Descrição do Resultado',
                    'name' => 'descricao_resultado',
                    'type' => 'textarea',
                ),
            ),
        ),
        // WhatsApp
        array(
            'key' => 'field_whatsapp_numero',
            'label' => 'Número do WhatsApp',
            'name' => 'whatsapp_numero',
            'type' => 'text',
            'default_value' => '5511941543929',
            'instructions' => 'Incluir código do país (ex: 5511912345678)',
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'testes',
            ),
        ),
    ),
));

endif;
```

---

## ✅ Melhorias Implementadas

### Baseadas no React (TesteTDAH.tsx)

1. ✅ **Validação de resposta obrigatória** - Não permite avançar sem seleção
2. ✅ **Botão desabilitado sem seleção** - UX melhorada
3. ✅ **Lógica correta do botão "Voltar"** - Restaura resposta anterior
4. ✅ **Scroll automático** - Vai para o topo ao mudar de pergunta
5. ✅ **Validação de índices de array** - Previne erros
6. ✅ **Cálculo preciso de score** - Arredondamento correto
7. ✅ **Mensagens condicionais** - Baseadas na pontuação
8. ✅ **Opções configuráveis via ACF** - Totalmente personalizável
9. ✅ **Segurança com nonce** - Proteção CSRF
10. ✅ **WhatsApp configurável** - Número personalizado por teste
11. ✅ **Progresso visual melhorado** - Percentual e contagem
12. ✅ **Mensagens de erro** - Feedback visual claro

---

## 🐛 Debug Mode

Para ativar o modo debug (apenas para administradores):

Adicione `?debug=1` na URL do teste:
```
https://seusite.com/teste/teste-tdah?debug=1
```

Isso mostrará:
- Informações do teste (ID, perguntas carregadas)
- Estado da sessão (step, questão atual, respostas)
- Primeira e última pergunta
- Status do ACF

---

## 📚 Recursos Adicionais

- [Documentação ACF Repeater](https://www.advancedcustomfields.com/resources/repeater/)
- [Documentação ACF Select](https://www.advancedcustomfields.com/resources/select/)
- [ACF Local Fields](https://www.advancedcustomfields.com/resources/register-fields-via-php/)

---

**Desenvolvido com base nas melhores práticas do React TesteTDAH.tsx** 🚀
