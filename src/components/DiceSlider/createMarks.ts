export function createMarks(maxValue: number, marksCount: number, isLabel: boolean) {
  const step = maxValue / marksCount;
  const marks = [];

  for (let i = 0; i <= marksCount; ++i) {
    const value = (step * i).toFixed()
    
    marks.push({
      value: Number(value),
      ...isLabel ? {label: value} : {}
    });
  }

  return marks;
}
