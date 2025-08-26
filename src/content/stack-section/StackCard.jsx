export default function StackCard({ title, skills }) {
  return (
    <div className="my-20">
      <div className="divider divider-end before:bg-transparent text-xl">
        {title}{skills.map((skill) => skill)}
      </div>
    </div>
  );
}
