import StackCard from "./StackCard";
import { stackInfo } from "./StackInfo";

export default function StackSection() {
  return (
    <div>
      {stackInfo.map((stack) => (
        <StackCard key={stack.title} title={stack.title} skills={stack.skills} />
      ))}
    </div>
  );
}
