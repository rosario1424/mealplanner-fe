import { useLoaderData } from "react-router";

const Dashboard = () => {
    
    const {user} = useLoaderData();

    console.log(user);

  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
                Dashboard
        </h1>
        <p className="mt-2 text-lg">
            Welcome to your dashboard!
        </p>
    </div>
  )
}

export default Dashboard;