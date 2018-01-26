import * as React from 'react';

interface TotalProps {
  total: number;
}

function Total( props: TotalProps ) {
  return (
    <tfoot>
      <tr>
        <td colSpan={5}>总价：{props.total}￥</td>
      </tr>
    </tfoot>
  );
}

export default Total;