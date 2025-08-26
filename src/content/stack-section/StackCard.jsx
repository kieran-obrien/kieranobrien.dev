export default function StackCard({ title, skills }) {
  return (
    <div className="my-10 text-xl flex align-end justify-end gap-4 flex-wrap">
      {title}
      {skills.map((skill) => skill)}
    </div>
  );
}
