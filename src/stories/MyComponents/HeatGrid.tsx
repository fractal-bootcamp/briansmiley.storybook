import "../../index.css";

export type HeatGridProps = {
  gridValues: number[][];
};

type RGBObj = {
  red: number;
  green: number;
  blue: number;
};
type GridCellProps = {
  value: number;
};
export const mockHeatGrid = Array(5)
  .fill(0)
  .map(() => Array.from({ length: 7 }, () => Math.round(Math.random() * 100)));

//Returns the color at the midpoint of startColor and endColor in RGB space, default assumes value is a percentage

function interpolatedColor(
  startColor: RGBObj,
  endColor: RGBObj,
  value: number,
  min: number = 0,
  max: number = 100
) {
  const rangeLimit = (num: number): number => Math.min(255, Math.max(num, 0));
  const red =
    startColor.red +
    ((endColor.red - startColor.red) * (value - min)) / (max - min);
  const blue =
    startColor.blue +
    ((endColor.blue - startColor.blue) * (value - min)) / (max - min);
  const green =
    startColor.green +
    ((endColor.green - startColor.green) * (value - min)) / (max - min);
  const colorCode =
    "#" +
    [red, green, blue]
      .map(num => Math.round(rangeLimit(num)).toString(16))
      .join("");
  return colorCode;
}
const GridCell = ({ value }: GridCellProps) => {
  const startColor = { red: 217, green: 217, blue: 217 };
  const endColor = { red: 62, green: 95, blue: 204 };
  const cellColor = interpolatedColor(startColor, endColor, value);
  const cellColorStyle = { background: cellColor };
  return (
    <div className="flex">
      <button className="w-[60px] h-[60px]" style={cellColorStyle}></button>
    </div>
  );
};
const HeatGrid = ({ gridValues }: HeatGridProps) => {
  const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-3">
        {days.map(day => {
          return (
            <div className="flex w-[60px] h-[60px] justify-center items-end">
              {day}

            </div>
          );
        })}
      </div>
      {gridValues.map(row => {
        return (
          <div className="flex flex-row gap-3">
            {row.map(value => (
              <GridCell value={value} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default HeatGrid;
