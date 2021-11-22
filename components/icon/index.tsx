import React, { FC } from 'react';
import icons from './icons';

interface MyState {
  className?:string, onClick?:any, type:string, title?:string
}
export const Icon: FC<MyState> = ({className, onClick, type, title}:MyState) => {
  const addClassName = className === undefined ? '' : className;
  const addtitle = title === undefined ? '' : title;
  const typeName = type === undefined ? '' : type;
  // const { removeMedia, index } = props;
  let typeValue = icons.find((o) => o.name === typeName);
  // console.log("clock --->", type )
  return (
    <>
      {typeValue && (
        <i
          className={`custIcon custIcon-${typeValue.name} ${addClassName}`}
          dangerouslySetInnerHTML={{ __html: typeValue.code }}
          onClick={onClick}
          title={addtitle}
        ></i>
      )}
    </>
  );
};

// height={props.height}
// width={props.width}
// fill={props.fill}
