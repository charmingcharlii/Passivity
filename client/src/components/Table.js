import React from 'react';
import CRUDTable,
{
    Fields,
    Field,
    CreateForm,
    UpdateForm,
    DeleteForm,
} from 'react-crud-table';

// Component's Base CSS
import './index.css';

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

let tasks = [
    {
        id: 1,
        title: 'Create an example',
        description: 'Create an example of how to use the component',
    },
    {
        id: 2,
        title: 'Improve',
        description: 'Improve the component!',
    },
];

const SORTERS = {
    NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
    NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
    STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
    STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = (data) => {
    const mapper = x => x[data.field];
    let sorter = SORTERS.STRING_ASCENDING(mapper);

    if (data.field === 'id') {
        sorter = data.direction === 'ascending' ?
            SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
    } else {
        sorter = data.direction === 'ascending' ?
            SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
    }

    return sorter;
};


let count = tasks.length;
const service = {
    fetchItems: (payload) => {
        let result = Array.from(tasks);
        result = result.sort(getSorter(payload.sort));
        return Promise.resolve(result);
    },
    create: (task) => {
        count += 1;
        tasks.push({
            ...task,
            id: count,
        });
        return Promise.resolve(task);
    },
    update: (data) => {
        const task = tasks.find(t => t.id === data.id);
        task.title = data.title;
        task.description = data.description;
        return Promise.resolve(task);
    },
    delete: (data) => {
        const task = tasks.find(t => t.id === data.id);
        tasks = tasks.filter(t => t.id !== task.id);
        return Promise.resolve(task);
    },
};

const styles = {
    container: { margin: 'auto', width: 'fit-content' },
};

const Table = () => (
    <div className='' style={styles.container}>
        <CRUDTable
            caption="Stocks"
            fetchItems={payload => service.fetchItems(payload)}
        >
            <Fields>
                <Field
                    name="id"
                    label="Id"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="title"
                    label="Ticker"
                    placeholder="Stock"
                />
                <Field
                    name="shares"
                    label="Shares"
                    placeholder="Stock"
                />
                <Field
                    name="avgCost"
                    label="Avg-Cost"
                    placeholder="Avg-Cost"
                />
                <Field
                    name="costBasis"
                    label="Cost-Basis"
                    hideInCreateForm
                    readOnly />
                <Field
                    name="mktPrice"
                    label="Mkt-Price"
                    hideInCreateForm
                    readOnly />
                <Field
                    name="gain-loss"
                    label="Gain-Loss"
                    hideInCreateForm
                    readOnly />
                <Field
                    name="growth"
                    label="Growth(%)"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="Annual-Div"
                    label="Annual-Div"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="frequency"
                    label="Frequency"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="ex-eff-div"
                    label="ex-eff-div"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="Declaration-Date"
                    label="Declaration-Date"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="Record-Date"
                    label="Record-Date"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="Payment-Date"
                    label="Payment-Date"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="Dividend-Yield"
                    label="Dividend-Yield"
                    hideInCreateForm
                    readOnly
                />
                <Field
                    name="Annual-Income"
                    label="Annual-Income"
                    hideInCreateForm
                    readOnly
                />
            </Fields>
            <CreateForm
                title="Task Creation"
                message="Add a new Stock!"
                trigger="Add a Stock"
                onSubmit={task => service.create(task)}
                submitText="Create"
                validate={(values) => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Please, provide task\'s title';
                    }

                    if (!values.description) {
                        errors.description = 'Please, provide task\'s description';
                    }

                    return errors;
                }}
            />

            <UpdateForm
                title="Task Update Process"
                message="Update Stock"
                trigger="Update"
                onSubmit={task => service.update(task)}
                submitText="Update"
                validate={(values) => {
                    const errors = {};

                    if (!values.id) {
                        errors.id = 'Please, provide id';
                    }

                    if (!values.title) {
                        errors.title = 'Please, provide task\'s title';
                    }

                    if (!values.description) {
                        errors.description = 'Please, provide task\'s description';
                    }

                    return errors;
                }}
            />

            <DeleteForm
                title="Task Delete Process"
                message="Are you sure you want to delete the task?"
                trigger="Delete"
                onSubmit={task => service.delete(task)}
                submitText="Delete"
                validate={(values) => {
                    const errors = {};
                    if (!values.id) {
                        errors.id = 'Please, provide id';
                    }
                    return errors;
                }}
            />
        </CRUDTable>
    </div>
);


export default Table