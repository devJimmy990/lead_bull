import CustomBarChart from '../../../components/charts/bar_chart';

const data = [
    { name: '1', Service1: 4000, Service2: 2400, },
    { name: '2', Service1: 3000, Service2: 1398, },
    { name: '3', Service1: 2780, Service2: 3908, },
    { name: '4', Service1: 1890, Service2: 4800, },
    { name: '5', Service1: 2390, Service2: 3800, },
    { name: '6', Service1: 3490, Service2: 4300, },
    { name: '7', Service1: 3490, Service2: 4300, },
    { name: '8', Service1: 3490, Service2: 4300, },
    { name: '9', Service1: 3490, Service2: 4300, },
    { name: '10', Service1: 3490, Service2: 4300, },
    { name: '11', Service1: 3490, Service2: 4300, },
    { name: '12', Service1: 3490, Service2: 4300, },
    { name: '13', Service1: 3490, Service2: 4300, },
    { name: '14', Service1: 4000, Service2: 2400, },
    { name: '15', Service1: 3000, Service2: 1398, },
    { name: '16', Service1: 2780, Service2: 3908, },
    { name: '17', Service1: 1890, Service2: 4800, },
    { name: '18', Service1: 2390, Service2: 3800, },
    { name: '19', Service1: 3490, Service2: 4300, },
    { name: '20', Service1: 3490, Service2: 4300, },
    { name: '21', Service1: 3490, Service2: 4300, },
    { name: '22', Service1: 3490, Service2: 4300, },
    { name: '23', Service1: 3490, Service2: 4300, },
    { name: '24', Service1: 3490, Service2: 4300, },
    { name: '25', Service1: 3490, Service2: 4300, },
    { name: '26', Service1: 3490, Service2: 4300, },
    { name: '27', Service1: 3490, Service2: 4300, },
    { name: '28', Service1: 3490, Service2: 4300, },
    { name: '29', Service1: 3490, Service2: 4300, },
    { name: '30', Service1: 3490, Service2: 4300, },

];

export default function Overview() {

    return (
        <div className="col-6 h-50 overflow-x-hidden overflow-y-auto m-auto">

            <CustomBarChart data={data}//.slice(0, 10)}
                keys={
                    [
                        { label: "Service1", fill: "#8884d8", activeFill: "pink" },
                    ]
                }
            />
        </div>
    );

}