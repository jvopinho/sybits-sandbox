import type React from "react";
import { CodeViewerWrapper, LeftSection, RightSection, SectionsWrapper } from './Main.styles'
import { useTheme } from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as DarkHighlighterStyle, oneLight as LightHighlighterStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { createCode } from "../helpers/CreateCode";
import { EditorSection } from "../components/Editor";

export const Main: React.FC = () => {
  const theme = useTheme()
  
  return (
    <SectionsWrapper>
      <LeftSection>
        <EditorSection />
      </LeftSection>

      <RightSection>
        <CodeViewerWrapper>
          <SyntaxHighlighter 
            language='typescript' 
            style={theme.mode === 'light' ? LightHighlighterStyle : DarkHighlighterStyle}
          >
            {createCode({
              createInstantInvite:              1n << 0n,
              kickMembers:                      1n << 1n,
              banMembers:                       1n << 2n,
              administrator:                    1n << 3n,
              manageChannels:                   1n << 4n,
              manageGuild:                      1n << 5n,
              addReactions:                     1n << 6n,
              viewAuditLog:                     1n << 7n, viewAuditLogs: 1n << 7n, // [DEPRECATED]
              prioritySpeaker:                  1n << 8n, voicePrioritySpeaker: 1n << 8n, // [DEPRECATED]
              stream:                           1n << 9n, voiceStream: 1n << 9n, // [DEPRECATED]
              viewChannel:                      1n << 10n, readMessages: 1n << 10n, // [DEPRECATED]
              sendMessages:                     1n << 11n,
              sendTTSMessages:                  1n << 12n,
              manageMessages:                   1n << 13n,
              embedLinks:                       1n << 14n,
              attachFiles:                      1n << 15n,
              readMessageHistory:               1n << 16n,
              mentionEveryone:                  1n << 17n,
              useExternalEmojis:                1n << 18n, externalEmojis: 1n << 18n, // [DEPRECATED]
              viewGuildInsights:                1n << 19n,
              connect:                          1n << 20n, voiceConnect: 1n << 20n, // [DEPRECATED]
              speak:                            1n << 21n, voiceSpeak: 1n << 21n, // [DEPRECATED]
              muteMembers:                      1n << 22n, voiceMuteMembers: 1n << 22n, // [DEPRECATED]
              deafenMembers:                    1n << 23n, voiceDeafenMembers: 1n << 23n, // [DEPRECATED]
              moveMembers:                      1n << 24n, voiceMoveMembers: 1n << 24n, // [DEPRECATED]
              useVAD:                           1n << 25n, voiceUseVAD: 1n << 25n, // [DEPRECATED]
              changeNickname:                   1n << 26n,
              manageNicknames:                  1n << 27n,
              manageRoles:                      1n << 28n,
              manageWebhooks:                   1n << 29n,
              manageGuildExpressions:           1n << 30n, manageExpressions: 1n << 30n, manageEmojisAndStickers: 1n << 30n, manageEmojis: 1n << 30n, // [DEPRECATED]
              useApplicationCommands:           1n << 31n, useSlashCommands: 1n << 31n, // [DEPRECATED]
              requestToSpeak:                   1n << 32n, voiceRequestToSpeak: 1n << 32n, // [DEPRECATED]
              manageEvents:                     1n << 33n,
              manageThreads:                    1n << 34n,
              createPublicThreads:              1n << 35n,
              createPrivateThreads:             1n << 36n,
              useExternalStickers:              1n << 37n,
              sendMessagesInThreads:            1n << 38n,
              useEmbeddedActivities:            1n << 39n, startEmbeddedActivities: 1n << 39n, // [DEPRECATED]
              moderateMembers:                  1n << 40n,
              viewCreatorMonetizationAnalytics: 1n << 41n,
              useSoundboard:                    1n << 42n,
              createGuildExpressions:           1n << 43n,
              createEvents:                     1n << 44n,
              useExternalSounds:                1n << 45n,
              sendVoiceMessages:                1n << 46n
            })}
          </SyntaxHighlighter>
        </CodeViewerWrapper>
      </RightSection>
    </SectionsWrapper>
  )
}