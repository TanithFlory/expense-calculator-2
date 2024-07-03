import NewExpense from "../NewExpense/NewExpense";
import YourExpenses from "../YourExpenses/YourExpenses";

export default function TotalExpenses() {
  return (
    <div className="bg-custom-gradient shadow-inset-custom max-w-[400px] mx-auto p-5 text-sm mb-4">
      <YourExpenses />
      <NewExpense />
    </div>
  );
}
