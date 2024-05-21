function calculateVolume(shape, radius, height) {
    if (shape === 'cylinder') {
        return Math.PI * Math.pow(radius, 2) * height;
    } else if (shape === 'cone') {
        return (1/3) * Math.PI * Math.pow(radius, 2) * height;
    } else {
        throw new Error('Invalid shape');
    }
}

module.exports = calculateVolume;