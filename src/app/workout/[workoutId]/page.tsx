import WorkOutDetailsCard from "@/component/shared/WorkOutDetailsCard";
import { IworkOuts } from "@/type/WorkOutsType";

interface IworkOutDetailProps {
  params: Promise<{
    workoutId: string;
  }>;
}

const getWorkOutLibrary = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = response.json();
  return data;
};

const WorkOutsDetailPage = async ({ params }: IworkOutDetailProps) => {
  const { workoutId } = await params;
  const workOutData = await getWorkOutLibrary();

  const workout = workOutData.find((workout: IworkOuts) => {
    return String(workout.id) === String(workoutId);
  });

  return (
    <div className="container mx-auto my-10">
      <WorkOutDetailsCard workout={workout} />
    </div>
  );
};
export default WorkOutsDetailPage;
