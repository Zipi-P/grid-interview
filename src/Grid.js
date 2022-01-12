import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr >
        {
          config.map((config,index) => {
            return (
              <th key={index}>{config.title}</th>
            )
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        data.map((data,index) => {
          return (
            <tr key={index}>
              {
                config.map((config,index) => {
                  return (
                    config.component ?
                      <config.component key={index} data={data[config.field]} />
                      :
                      <td key={index}>{data[config.field]}</td>)
                })}
            </tr>
          )
        })
      }
    </tbody>
  </table>
);

export default Grid;
