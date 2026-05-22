import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useExamStore = create(
  persist(
    (set, get) => ({
      exams: [
        {
          id: '1',
          subject: 'Mathematics',
          date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          priority: 'high',
          color: 'blue',
          studyStatus: 'in-progress',
          progressPercentage: 45,
          notesCount: 12,
        },
        {
          id: '2',
          subject: 'Physics',
          date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
          priority: 'medium',
          color: 'purple',
          studyStatus: 'not-started',
          progressPercentage: 0,
          notesCount: 0,
        },
        {
          id: '3',
          subject: 'Chemistry',
          date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
          priority: 'low',
          color: 'pink',
          studyStatus: 'completed',
          progressPercentage: 100,
          notesCount: 24,
        },
      ],
      studyStreak: 5,
      studyHours: 24,
      soundEnabled: true,
      theme: 'dark',

      // Actions
      addExam: (exam) => set((state) => ({
        exams: [...state.exams, { ...exam, id: Date.now().toString() }],
      })),

      updateExam: (id, updates) => set((state) => ({
        exams: state.exams.map((exam) =>
          exam.id === id ? { ...exam, ...updates } : exam
        ),
      })),

      deleteExam: (id) => set((state) => ({
        exams: state.exams.filter((exam) => exam.id !== id),
      })),

      reorderExams: (newExams) => set({ exams: newExams }),

      updateStudyStreak: (streak) => set({ studyStreak: streak }),

      updateStudyHours: (hours) => set({ studyHours: hours }),

      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),

      setTheme: (theme) => set({ theme }),

      getNextExam: () => {
        const exams = get().exams;
        if (exams.length === 0) return null;
        return exams.reduce((earliest, current) => {
          return new Date(current.date) < new Date(earliest.date) ? current : earliest;
        });
      },

      getTotalExams: () => get().exams.length,

      getCompletedExams: () => get().exams.filter((e) => e.studyStatus === 'completed').length,
    }),
    {
      name: 'exam-store',
      version: 1,
    }
  )
);

export default useExamStore;
