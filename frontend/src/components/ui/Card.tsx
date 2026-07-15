interface CardProps {
    children: React.ReactNode;
}

function Card({ children }: CardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">
            {children}
        </div>
    );
}

export default Card;