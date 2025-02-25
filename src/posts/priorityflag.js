'use strict';

// Mapping of priority levels to numerical values
const PRIORITY_MAP = {
    'low priority': 1,
    'medium priority': 2,
    'high priority': 3,
};

// Function to check for priority levels in the content and return the corresponding value
module.exports = function priorityflag(content) {
    // Convert content to lowercase for case-insensitive matching
    content = content.toLowerCase();

    // Check if any priority level exists in the content
    for (const [priority, value] of Object.entries(PRIORITY_MAP)) {
        if (content.includes(priority)) {
            return value;
        }
    }

    // Return 0 if no priority string is found
    return 0;
};
