import Link from "next/link";

export default function ExpenseCard({
  userId,
  totalExpenses,
  paymentLink,
}: {
  userId: string;
  totalExpenses: number;
  paymentLink: string;
}) {
  const currentUser = localStorage.getItem("userId");
  return (
    <div className="bg-custom-gradient shadow-inset-custom p-5 w-full max-w-[320px] rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-left">
          <div>{userId}</div>
          <div>
            <span className="text-sm">₹</span>{" "}
            <span className="text-green-400 text-sm font-bold">
              {totalExpenses || 0}
            </span>
          </div>
        </div>
        {currentUser !== userId.toLowerCase() ? (
          <a
            className="bg-green-400 rounded-md px-2 py-1 text-sm text-black cursor-pointer"
            href={paymentLink}
          >
            Pay
          </a>
        ) : null}
      </div>
      <Link
        href={`/view-expense/${userId.toLowerCase()}`}
        className="text-sm bg-green-400 text-black p-2 rounded-sm text-center cursor-pointer block mt-4"
      >
        {`View ${userId}'s expenses`}
      </Link>
    </div>
  );
}
