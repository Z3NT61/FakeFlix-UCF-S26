/**
 * SplashAnimation Component
 *
 * This file defines a splash screen component that displays an animated introduction
 * similar to streaming service intros. The component automatically plays a sound effect
 * and then redirects the user to the browse page after the animation completes.
 *
 * Key Features:
 * - Displays a visually rich animation with multiple layered effects
 * - Plays a "ta-dum" sound effect 200ms after mounting
 * - Automatically redirects to '/browse' route after 5.7 seconds
 * - Uses Framer Motion for smooth fade-in/fade-out transitions
 * - Self-contained with no required props
 *
 * Dependencies: React, React Router (useHistory), Framer Motion
 */

import "./splashAnimation.scss"
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { TADUM_SOUND_URL } from "../../requests";
import { motion } from "framer-motion";

/**
 * SplashAnimation - Main component function
 *
 * Renders an animated splash screen with sound effects and automatic navigation.
 * The component creates a complex visual animation structure with multiple layers
 * of "fur" and "lamp" elements that are styled via SCSS to create the animation effect.
 *
 * @returns {JSX.Element} A motion.div containing the animated splash screen
 */
const SplashAnimation = () => {

	let history = useHistory();
	const soundRef = useRef(null);

	/**
	 * soundNotification - Plays the intro sound effect
	 *
	 * Creates a new Audio object with the TADUM_SOUND_URL and attempts to play it.
	 * Includes error handling to gracefully catch any playback failures (e.g., when
	 * browsers block autoplay). The promise-based approach ensures we handle both
	 * successful and failed playback attempts.
	 *
	 * @returns {void}
	 */
	const soundNotification = () => {
		const sound = new Audio(TADUM_SOUND_URL);
		const promise = sound.play();

		if (promise !== undefined) {
			promise.then(() => {}).catch(error => console.error(error));
		}
	}

	/**
	 * useEffect - Manages component lifecycle and timing
	 *
	 * Sets up two timed actions when the component mounts:
	 * 1. Triggers the sound effect after 200ms delay
	 * 2. Navigates to the '/browse' route after 5700ms (5.7 seconds)
	 *
	 * Dependencies: [history] - re-runs if history object changes
	 *
	 * Note: Currently lacks cleanup function to clear timeouts if component
	 * unmounts before timers complete.
	 */
	useEffect(() => {
		setTimeout(() => {
			soundNotification();
		}, 200)
		setTimeout(() => {
			history.push('/browse')
		}, 5700)
	}, [history])

	return (
		<motion.div
			id="SplashAnimation__wrp"
			className='SplashAnimation'
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			{/* Hidden audio element with sound source reference */}
			<audio ref={soundRef} src={TADUM_SOUND_URL} />

			{/* Main animation container with letter data attribute for customization */}
			<div className="netflixintro" data-letter="F">

				{/* Helper 1: Contains brush effects (31 fur elements) and lighting effects (28 lamp elements) */}
				<div className="helper-1">
					<div className="effect-brush">
						<span className="fur-31"></span>
						<span className="fur-30"></span>
						<span className="fur-29"></span>
						<span className="fur-28"></span>
						<span className="fur-27"></span>
						<span className="fur-26"></span>
						<span className="fur-25"></span>
						<span className="fur-24"></span>
						<span className="fur-23"></span>
						<span className="fur-22"></span>
						<span className="fur-21"></span>
						<span className="fur-20"></span>
						<span className="fur-19"></span>
						<span className="fur-18"></span>
						<span className="fur-17"></span>
						<span className="fur-16"></span>
						<span className="fur-15"></span>
						<span className="fur-14"></span>
						<span className="fur-13"></span>
						<span className="fur-12"></span>
						<span className="fur-11"></span>
						<span className="fur-10"></span>
						<span className="fur-9"></span>
						<span className="fur-8"></span>
						<span className="fur-7"></span>
						<span className="fur-6"></span>
						<span className="fur-5"></span>
						<span className="fur-4"></span>
						<span className="fur-3"></span>
						<span className="fur-2"></span>
						<span className="fur-1"></span>
					</div>
					<div className="effect-lumieres">
						<span className="lamp-1"></span>
						<span className="lamp-2"></span>
						<span className="lamp-3"></span>
						<span className="lamp-4"></span>
						<span className="lamp-5"></span>
						<span className="lamp-6"></span>
						<span className="lamp-7"></span>
						<span className="lamp-8"></span>
						<span className="lamp-9"></span>
						<span className="lamp-10"></span>
						<span className="lamp-11"></span>
						<span className="lamp-12"></span>
						<span className="lamp-13"></span>
						<span className="lamp-14"></span>
						<span className="lamp-15"></span>
						<span className="lamp-16"></span>
						<span className="lamp-17"></span>
						<span className="lamp-18"></span>
						<span className="lamp-19"></span>
						<span className="lamp-20"></span>
						<span className="lamp-21"></span>
						<span className="lamp-22"></span>
						<span className="lamp-23"></span>
						<span className="lamp-24"></span>
						<span className="lamp-25"></span>
						<span className="lamp-26"></span>
						<span className="lamp-27"></span>
						<span className="lamp-28"></span>
					</div>
				</div>

				{/* Helper 2: Contains brush effects (31 fur elements) for second animation layer */}
				<div className="helper-2">
					<div className="effect-brush">
						<span className="fur-31"></span>
						<span className="fur-30"></span>
						<span className="fur-29"></span>
						<span className="fur-28"></span>
						<span className="fur-27"></span>
						<span className="fur-26"></span>
						<span className="fur-25"></span>
						<span className="fur-24"></span>
						<span className="fur-23"></span>
						<span className="fur-22"></span>
						<span className="fur-21"></span>
						<span className="fur-20"></span>
						<span className="fur-19"></span>
						<span className="fur-18"></span>
						<span className="fur-17"></span>
						<span className="fur-16"></span>
						<span className="fur-15"></span>
						<span className="fur-14"></span>
						<span className="fur-13"></span>
						<span className="fur-12"></span>
						<span className="fur-11"></span>
						<span className="fur-10"></span>
						<span className="fur-9"></span>
						<span className="fur-8"></span>
						<span className="fur-7"></span>
						<span className="fur-6"></span>
						<span className="fur-5"></span>
						<span className="fur-4"></span>
						<span className="fur-3"></span>
						<span className="fur-2"></span>
						<span className="fur-1"></span>
					</div>
				</div>

				{/* Helper 3: Contains brush effects (31 fur elements) for third animation layer */}
				<div className="helper-3">
					<div className="effect-brush">
						<span className="fur-31"></span>
						<span className="fur-30"></span>
						<span className="fur-29"></span>
						<span className="fur-28"></span>
						<span className="fur-27"></span>
						<span className="fur-26"></span>
						<span className="fur-25"></span>
						<span className="fur-24"></span>
						<span className="fur-23"></span>
						<span className="fur-22"></span>
						<span className="fur-21"></span>
						<span className="fur-20"></span>
						<span className="fur-19"></span>
						<span className="fur-18"></span>
						<span className="fur-17"></span>
						<span className="fur-16"></span>
						<span className="fur-15"></span>
						<span className="fur-14"></span>
						<span className="fur-13"></span>
						<span className="fur-12"></span>
						<span className="fur-11"></span>
						<span className="fur-10"></span>
						<span className="fur-9"></span>
						<span className="fur-8"></span>
						<span className="fur-7"></span>
						<span className="fur-6"></span>
						<span className="fur-5"></span>
						<span className="fur-4"></span>
						<span className="fur-3"></span>
						<span className="fur-2"></span>
						<span className="fur-1"></span>
					</div>
				</div>

				{/* Helper 4: Contains brush effects (31 fur elements) for fourth animation layer */}
				<div className="helper-4">
					<div className="effect-brush">
						<span className="fur-31"></span>
						<span className="fur-30"></span>
						<span className="fur-29"></span>
						<span className="fur-28"></span>
						<span className="fur-27"></span>
						<span className="fur-26"></span>
						<span className="fur-25"></span>
						<span className="fur-24"></span>
						<span className="fur-23"></span>
						<span className="fur-22"></span>
						<span className="fur-21"></span>
						<span className="fur-20"></span>
						<span className="fur-19"></span>
						<span className="fur-18"></span>
						<span className="fur-17"></span>
						<span className="fur-16"></span>
						<span className="fur-15"></span>
						<span className="fur-14"></span>
						<span className="fur-13"></span>
						<span className="fur-12"></span>
						<span className="fur-11"></span>
						<span className="fur-10"></span>
						<span className="fur-9"></span>
						<span className="fur-8"></span>
						<span className="fur-7"></span>
						<span className="fur-6"></span>
						<span className="fur-5"></span>
						<span className="fur-4"></span>
						<span className="fur-3"></span>
						<span className="fur-2"></span>
						<span className="fur-1"></span>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default SplashAnimation
