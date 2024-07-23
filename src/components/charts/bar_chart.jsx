import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CustomBarChart({ data, keys }) {

    return (
        <ResponsiveContainer >
            <BarChart data={data} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={18} />
                <YAxis fontSize={18} />
                <Tooltip />
                {/* <Legend /> */}

                {
                    keys.map((key, index) => (
                        <Bar
                        barSize={10}
                            key={index}
                            fill={key.fill}
                            dataKey={key.label}
                            className='bar m-2'
                            activeBar={<Rectangle fill={key.activeFill} />}
                        />
                    ))
                }
            </BarChart>
        </ResponsiveContainer>
    );
}
