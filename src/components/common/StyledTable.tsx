import React from "react";



interface TableProps {
  data: any[];
  title?: string;
}

const StyledTable = ({ data, title }: TableProps) => {
  if (!data || data.length === 0) return null;
  const columns = Object.keys(data[0]).filter((col) => col !== "_color");

  return (
    <div className="w-full max-w-4xl mx-auto flex justify-end ">
      <div className="w-full">
        {title && (
          <h2 className="text-2xl font-bold text-white border-b-4 border-f1-purple p-3 bg-black font-formula-italic ">
            {title}
          </h2>
        )}
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white text-black border-separate border-spacing-0 text-lg text-center">
            <thead className="font-formula-medium">
              <tr>
                <th className="p-2 text-center ">POS</th>
                {columns.map((col) => (
                  <th
                    key={col}
                    className={"px-6 py-3 text-center font-bold bg-gray-100"}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-kh-regular ">
              {data.map((row, i) => (
                <tr
                  key={i}
                  className={
                    "odd:bg-f1-purple/5 hover:bg-f1-purple/20 transition-colors  "
                  }
                >
                  <td className="px-4 py-3 font-kh-bold text-f1-purple text-xl text-center">
                    {i + 1}
                  </td>
                  {columns.map((col, colIdx) => {
                    // עיצוב סגול לעמודת הנקודות אם היא האחרונה
                    const isLast = colIdx === columns.length - 1;
                    const isPoints = col.toLowerCase() === "points";
                    return (
                      <td
                        key={col}
                        className={
                          isLast && isPoints
                            ? "font-kh-bold text-f1-purple text-xl text-center py-3 px-6"
                            : isPoints
                            ? "font-kh-bold text-f1-purple text-xl text-center py-3 px-6"
                            : colIdx === 0 && row._color
                            ? `font-formula-medium text-lg text-left pl-6 border-l-8 ${row._color} px-6 py-3`
                            : colIdx === 0
                            ? "font-formula-medium text-lg text-left pl-6 px-6 py-3"
                            : "font-formula-medium text-lg text-center px-6 py-3"
                        }
                      >
                        {row[col]}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StyledTable;
