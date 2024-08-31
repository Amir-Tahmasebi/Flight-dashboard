import { useFlight } from "./";
import { Card, Button } from "./../../components";

const PAGE = 1;
const SIZE = 3;

const Dashboard = () => {
  const { handlePagination, list, payload, page, total } = useFlight(
    PAGE,
    SIZE
  );

  const renderCards = list?.map((flight) => (
    <Card
      key={flight.boarding}
      flight={flight}
      className="basis-[calc(33%-12px)]"
    />
  ));

  const renderPagination = (
    <div className="flex justify-center items-start mt-4">
      <Button className="w-1/6 min-w-20 max-w-28 bg-gray-800" onClick={handlePagination}>
        Load more
      </Button>
    </div>
  );

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <span className="text-xl font-bold text-gray-900">
          Viewed : {list.length}
        </span>
        <span className="text-xl font-bold text-gray-900">Total : {total}</span>
      </div>
      <div className="flex flex-wrap justify-start items-start gap-x-6 gap-y-4">
        {renderCards}
      </div>
      <>{page !== payload && renderPagination}</>
    </>
  );
};

export default Dashboard;
