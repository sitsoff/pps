import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
    return (
        <div className={`bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

interface ImageCardProps {
    title: string;
    description: string;
    image: string;
    className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ title, description, image, className = "" }) => {
    return (
        <Card className={`group flex flex-col gap-4 transition-all duration-300 hover:shadow-md ${className}`}>
            <div className="aspect-video relative overflow-hidden rounded-lg bg-zinc-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10" />
                {/* Placeholder for real image implementation */}
                <div className="flex items-center justify-center h-full w-full text-zinc-400 font-medium">
                    {title} Image
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-black">{title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
            </div>
        </Card>
    );
};
