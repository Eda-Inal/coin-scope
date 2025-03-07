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
        <ResponsiveContainer width="100%" height={60}>
            <AreaChart data={normalizedData}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.3} />
                    </linearGradient>
                </defs>

              
                <YAxis type="number" domain={[0, 100]} hide />

                <Area
                    type="monotone"
                    dataKey="scaledPrice"
                    stroke="#0ea5e9"
                    fill="none"
                    strokeWidth={2}
                    animationDuration={0} 
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Sparkline;
