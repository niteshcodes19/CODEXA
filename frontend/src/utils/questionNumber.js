export const getNextQuestionNumber = (questions = []) => {
  if (!questions.length) return 1;
  const max = Math.max(...questions.map((q) => Number(q.question_number) || 0));
  return max + 1;
};
