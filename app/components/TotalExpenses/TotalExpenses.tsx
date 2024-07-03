import NewExpense from "../NewExpense/NewExpense";
import YourExpenses from "../YourExpenses/YourExpenses";

export default function TotalExpenses({
  moneyUserOwes,
}: {
  moneyUserOwes: number;
}) {
  const user = localStorage.getItem("userId");
  return (
    <div className="bg-custom-gradient shadow-inset-custom max-w-[400px] mx-auto p-5 text-sm mb-4">
      <h1 className="text-center text-green-400 text-lg">Hello <span className="font-bold">{`${user?.[0].toUpperCase()}${user?.slice(1)}`}</span></h1>
      <YourExpenses moneyUserOwes={moneyUserOwes} />
      <NewExpense />
    </div>
  );
}
