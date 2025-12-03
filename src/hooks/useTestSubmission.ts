import { supabase } from "@/integrations/supabase/client";

interface TestSubmissionData {
  email: string;
  testType: string;
  score: number;
  maxScore: number;
  resultLevel: string;
  answers: number[];
}

export const submitTestResult = async (data: TestSubmissionData): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('test_submissions')
      .insert({
        email: data.email,
        test_type: data.testType,
        score: data.score,
        max_score: data.maxScore,
        result_level: data.resultLevel,
        answers: data.answers,
      });

    if (error) {
      console.error('Error submitting test result:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error submitting test result:', error);
    return false;
  }
};

export const useTestSubmission = () => {
  return { submitTestResult };
};
