const sortLeaderboardEntries = (entries) => {
    return [...entries].sort((a, b) => {
        if (b.solvedCount !== a.solvedCount) return b.solvedCount - a.solvedCount;
        if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;

        const aRuntime = a.avgRuntime ?? Number.MAX_SAFE_INTEGER;
        const bRuntime = b.avgRuntime ?? Number.MAX_SAFE_INTEGER;
        if (aRuntime !== bRuntime) return aRuntime - bRuntime;

        if (a.totalSubmissions !== b.totalSubmissions) {
            return a.totalSubmissions - b.totalSubmissions;
        }

        return new Date(a.memberSince).getTime() - new Date(b.memberSince).getTime();
    });
};

const assignRanks = (sortedEntries) => {
    return sortedEntries.map((entry, index) => ({
        ...entry,
        rank: index + 1
    }));
};

const buildUserEntry = (user, stats, totalQuestions) => {
    const totalSubmissions = stats?.totalSubmissions || 0;
    const acceptedSubmissions = stats?.acceptedSubmissions || 0;
    const acceptedRuntimeSum = stats?.acceptedRuntimeSum || 0;
    const solvedCount = user.solved_questions?.length || 0;
    const accuracy = totalSubmissions > 0
        ? (acceptedSubmissions / totalSubmissions) * 100
        : 0;
    const avgRuntime = acceptedSubmissions > 0
        ? acceptedRuntimeSum / acceptedSubmissions
        : null;

    return {
        userId: user._id.toString(),
        name: user.name,
        solvedCount,
        totalQuestions,
        solvedAll: totalQuestions > 0 && solvedCount >= totalQuestions,
        accuracy: Math.round(accuracy * 100) / 100,
        avgRuntime: avgRuntime != null ? Math.round(avgRuntime) : null,
        totalSubmissions,
        memberSince: user.createdAt
    };
};

module.exports = {
    sortLeaderboardEntries,
    assignRanks,
    buildUserEntry
};
