import React from "react";


const TableComponent = ({ columns, data, actions }) => {
  return (
    <div className="w-full p-4 bg-gray-900">
      <div className="w-full overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-sm text-gray-200">
          <thead className="text-xs uppercase bg-gray-800">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="p-4 text-left">{col.label}</th>
              ))}
              {actions && <th className="p-4 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr 
                key={item.id} 
                className={`border-t border-gray-700 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                } hover:bg-gray-700 transition-colors`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="p-4">
                    {col.render ? col.render(item) : item[col.key]}
                  </td>
                ))}
                {actions && (
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      {actions.map((action, i) => (
                        <button
                          key={i}
                          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                          onClick={() => action.onClick(item)}
                        >
                          {action.icon}
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableComponent;

