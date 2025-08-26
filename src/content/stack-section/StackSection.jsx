import StackCard from "./StackCard";
import { stackInfo } from "./StackInfo";

export default function StackSection() {
  return (
    <div className="flex flex-col text-right flex-wrap">
      {stackInfo.map((stack) => (
        <StackCard key={stack.title} title={stack.title} skills={stack.skills} />
      ))}
    </div>
  );
}
