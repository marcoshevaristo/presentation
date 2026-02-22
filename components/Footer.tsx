interface Props {
    currentYear?: number;
}

export default function Footer(props: Props) {
    return (
        <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-6">
                <div className="text-center text-zinc-600 dark:text-zinc-400">
                    <p>© {props.currentYear} Marcos Evaristo. All rights reserved.</p>
                    <p className="mt-2 text-sm">
                        Built with Next.js 16, TypeScript, and Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}

export async function getServerSideProps() {
    return { props: { currentYear: new Date().getFullYear() } };
}