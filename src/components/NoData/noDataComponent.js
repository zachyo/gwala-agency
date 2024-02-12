import { ReactComponent as Zombie } from "../../assets/img/zombie.svg";

export const NoDataComponent = (header, description) => {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="flex flex-col gap-12 items-center justify-center">
        <Zombie />
        <div className="flex flex-col gap-5">
          <h3
            className="font-productsans700 text-273B4A text-center text-2xl"
            style={{ color: "#273B4A", fontWeight : '700' }}
          >
            {header ?? "No data"}
          </h3>
          {description && (
            <p
              className="text-center text-xl font-productsans"
              style={{ color: "#273B4A", maxWidth: "481px" }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};