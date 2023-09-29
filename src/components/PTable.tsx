import React from "react";
import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { AnyObject } from "antd/es/_util/type";

interface IProps<RecordType> 
{
    columns: ColumnsType<RecordType>;
    rowKey: string;
    dataSource: RecordType[];
    onclick: boolean;
}

interface IState { }

export default class JATable<RecordType extends AnyObject> extends React.Component<IProps<RecordType>, IState> {
    override render()
    {
        return (
            <div>
                <Table<RecordType>
                    rowKey={this.props.rowKey}
                    columns={this.props.columns}
                    dataSource={this.props.dataSource}
                    scroll={{ x: true }}
                    sortDirections={["ascend", "descend"]}
                />
            </div>
        );
    }
}