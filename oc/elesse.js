function handleAction(action) {
    switch (action) {
        case 'start':
            console.log('Starting...');
            break;
        case 'pause':
            console.log('Pausing...');
            break;
        case 'stop': {
            console.log('Stopping...');
            // Additional code for stopping can go here
            break;
        }
        default:
            console.log('Unknown action');
    }
}

// Example usage
handleAction('stop');  // Output: Stopping...
