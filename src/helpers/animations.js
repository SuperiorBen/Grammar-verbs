import animation from '../assets/dataJson/cat'
import starAnimation from '../assets/dataJson/star'
 
export const runAnimation = () => {
    // Lotti script for run animation
    bodymovin.loadAnimation({
        animationData: animation,
        container: document.getElementById('animationContent'),
        path: 'nombre_animacion.json',
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: 'cat' // Name for future reference. Optional.
    })
}

export const runAnimationStar = () => {
    // Lotti script for run animation
    bodymovin.loadAnimation({
        animationData: starAnimation,
        container: document.getElementById('animationContentStar'),
        path: 'nombre_animacion.json',
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: 'star' // Name for future reference. Optional.
    })
}