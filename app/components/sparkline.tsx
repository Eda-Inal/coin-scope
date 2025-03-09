import { AreaChart, Area, YAxis, ResponsiveContainer } from 'recharts';

interface SparklineProps {
    data: number[];
}

const Sparkline: React.FC<SparklineProps> = ({ data }) => {
    if (!data || data.length === 0) return null;
    const minPrice = Math.min(...data);
    const maxPrice = Math.max(...data);

    const normalizedData = data.map(price => ({
        price,
        scaledPrice: ((price - minPrice) / (maxPrice - minPrice)) * 100 
    }));

    return (
        <ResponsiveContainer width="80%" height={60}>
            <AreaChart data={normalizedData}>
                <YAxis type="number" domain={[0, 100]} hide />

                <Area
                    type="monotone"
                    dataKey="scaledPrice"
                    stroke="#0755E7"
                    fill="none"
                    strokeWidth={2}
                    animationDuration={0}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Sparkline;
