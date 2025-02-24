import { useEffect, useRef } from 'react';

const useScrollAnimation = (animationClass = 'fade-in', threshold = 0.5) => {
	const elementsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(animationClass);
					}
				});
			},
			{ threshold },
		);

		// Store the current ref in a variable
		const currentElements = elementsRef.current;

		currentElements.forEach((element) => {
			if (element) observer.observe(element);
		});

		return () => {
			currentElements.forEach((element) => {
				if (element) observer.unobserve(element);
			});
		};
	}, [animationClass, threshold]);

	return elementsRef;
};

export default useScrollAnimation;
