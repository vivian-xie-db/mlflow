import type { ThemeType } from '@databricks/design-system';

export type Language = 'python' | 'typescript';

export const LanguageTab = ({
  theme,
  language,
  setLanguage,
}: {
  theme: ThemeType;
  language: Language;
  setLanguage: (lang: Language) => void;
}) => {
  const tabs: { key: Language; label: string }[] = [
    { key: 'python', label: 'Python' },
    { key: 'typescript', label: 'TypeScript' },
  ];

  return (
    <div
      css={{
        display: 'inline-flex',
        borderRadius: theme.borders.borderRadiusMd,
        border: `1px solid ${theme.colors.border}`,
        overflow: 'hidden',
      }}
    >
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setLanguage(key)}
          css={{
            padding: `${theme.spacing.xs + 2}px ${theme.spacing.md}px`,
            border: 'none',
            backgroundColor: language === key ? theme.colors.actionPrimaryBackgroundDefault : 'transparent',
            color: language === key ? '#fff' : theme.colors.textSecondary,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            ':hover': language !== key ? { backgroundColor: theme.colors.actionIconBackgroundHover } : {},
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
