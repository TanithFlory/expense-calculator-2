import YourExpenses from "@/app/components/YourExpenses/YourExpenses";
// import Spinner from "@/app/utils/Spinner";
// import { Expense } from "@/types";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Page() {
//   const { userId } = useParams();
//   const [expenses, setExpenses] = useState<Expense[] | null>(null);
//   const [loading, setLoading] = useState(false);
//   async function getExpenses() {
//     try {
//       setLoading(true);
//       const response = await fetch(`/api/view-expense?userId=${userId}`, {
//         method: "GET",
//       });

//       const json = await response.json();
//       setExpenses(json.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     getExpenses();
//   }, []);

//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <div className="flex h-full w-full items-center justify-center">
//       <div className=" max-w-[1200px] mx-auto">
//         {expenses?.map(({}))}
//       </div>
//     </div>
//   );
// }
interface Params {
  params: {
    userId: string;
  };
}
export default function Page({ params }: Params) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[900px] mx-auto px-4">
        <YourExpenses userId={params.userId as string} hideDelete={true} />
      </div>
    </div>
  );
}
