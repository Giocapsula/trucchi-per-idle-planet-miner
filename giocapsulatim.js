/**
 * GiocapsulaTimer - Simple Timer Utility
 * Author: Giocapsula
 * License: Custom
 */

class GiocapsulaTimer {
    /**
     * Initializes the timer.
     * @param {Function} callback - Function to execute when time is up.
     * @param {number} duration - Duration in milliseconds.
     */
    constructor(callback, duration) {
        if (typeof callback !== 'function' || typeof duration !== 'number' || duration <= 0) {
            throw new Error('[GiocapsulaTimer] Invalid parameters.');
        }
        this.callback = callback;
        this.duration = duration;
        this.timerId = null;
    }

    /**
     * Starts the timer.
     */
    start() {
        if (this.timerId) return;
        this.timerId = setTimeout(() => {
            this.callback();
            this.timerId = null;
        }, this.duration);
        console.log('[GiocapsulaTimer] Timer started.');
    }

    /**
     * Stops the timer if running.
     */
    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
            console.log('[GiocapsulaTimer] Timer stopped.');
        }
    }
}

// Example usage:
// const timer = new GiocapsulaTimer(() => console.log('Time is up!'), 5000);
// timer.start();
// setTimeout(() => timer.stop(), 3000); // Stops before completion

module.exports = GiocapsulaTimer;
