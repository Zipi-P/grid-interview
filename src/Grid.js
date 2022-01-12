import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {
          config.map((config) => {
            return (
              <th>{config.title}</th>
            )
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        data.map((data) => {
          return (
            <tr>
              {
                config.map((config) => {
                  return (
                    config.component ?
                      <config.component data={data[config.field]} />
                      :
                      <td>{data[config.field]}</td>)
                })}
            </tr>
          )
        })
      }
    </tbody>
  </table>
);

export default Grid;
