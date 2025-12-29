import React from 'react'
import { data } from './highlight-card'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { MdAirplaneTicket } from 'react-icons/md'
import { LuMessagesSquare } from 'react-icons/lu'
import { AiOutlineMail } from 'react-icons/ai'
import { IoFileTraySharp } from 'react-icons/io5'

// Match the icons to its respective react-icons
const iconMap = {
    ticket: MdAirplaneTicket,
    message: LuMessagesSquare,
    email: AiOutlineMail,
    file: IoFileTraySharp,
};

const HighlightCard = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full border-4 border-dashed border-gray-400 px-3 py-5 gap-3 sm:px-5 sm:py-8 sm:gap-4 md:px-7 md:py-10 md:gap-5">
            {data.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                    <Card
                        key={item.id}
                        className="rounded-xl shadow-md px-3 py-6 space-y-2 sm:px-5 sm:py-8 sm:space-y-3 md:px-7 md:py-10 md:space-y-4 bg-white flex flex-col items-center text-center"
                    >
                        {Icon && <Icon className="text-3xl text-primary mb-2" />}
                        <CardTitle className="text-base sm:text-lg md:text-xl font-semibold mb-1">{item.title}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600">
                            Downs those still witty an balls so chief so. Moment an little remain no lively up
                        </CardDescription>
                    </Card>
                );
            })}
        </section>
    );
}

export default HighlightCard