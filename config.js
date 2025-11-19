module.exports = {
    bot: {
        tokens: [
          "1",              // Main bot token - Replace with your actual token
          "2",      // 2 bot token - Uncomment and replace to use
          "3",       // 3 bot token - Uncomment and replace to use
          "4",      // 4 bot token - Uncomment and replace to use
          "5",       // 5 bot token - Uncomment and replace to use
        ].filter(Boolean),

        defaultLanguage: 'ar', // ar | en لغة البوت
        
        activity: {
            name: 'Velros Avt.', // رسالة حالة البوت
            type: 'WATCHING', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'dnd' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '1238919767939616830',         // ايدي السيرفر
        broadcastRoleId: '1286425100257726555', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1440609452091768832' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }

};

