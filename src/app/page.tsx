import UseDebounce from '@/components/UseDebounce';
import dynamic from 'next/dynamic';
// import UseLocalStorage from '@/components/UseLocalStorage';

const UseLocalStorage = dynamic(() => import('@/components/UseLocalStorage'), {
	ssr: false,
	loading: () => <p className="text-base">Loading local storage...</p>
});

export default function Home() {
	return (
		<div>
			<p className="text-3xl mb-7">Utilizing usehooks-ts</p>
			<UseDebounce />
			<br />
			<UseLocalStorage />
		</div>
	);
}
