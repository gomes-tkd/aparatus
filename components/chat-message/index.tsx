import { UIMessage } from "ai";
import { Bot } from "lucide-react";
import { Streamdown } from "streamdown";

interface ChatMessageProps {
  message: UIMessage;
  isStreaming?: boolean;
}

export default function ChatMessage({ message, isStreaming = false }: ChatMessageProps) {
  const isUser = message.role === "user";
  const isSystem = message.role === "system";
  const content = message.parts
    .filter(part => part.type === "text")
    .map(part => part.text)
    .join("");

  if (isSystem) {
    return (
      <div className={"flex w-full flex-col gap-3 px-5 pt-6 pb-0"}>
        <div className={"border-border flex w-full flex-col gap-2.5 rounded-xl border p-3"}>
          <div className={"flex w-full items-center justify-center gap-2.5"}>
            <p className={"text-muted-foreground grow basis-0 text-center text-sm leading-[1.4] font-normal"}>
              {content}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isUser) {
    return (
      <div className={"flex w-full flex-col items-end gap-3 pt-6 pr-5 pb-0 pl-10"}>
        <div className={"bg-secondary flex max-w-[calc(100%-40px)] items-center gap-2.5 rounded-full px-4 py-3"}>
          <p className={"text-foreground truncate text-sm leading-[1.4] font-normal break-words whitespace-normal"}>
            {content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={"flex w-full flex-col gap-3 pt-6 pr-14 pb-0 pl-3"}>
      <div className={"flex w-full gap-2"}>
        <div
          className={
            "border-border flex size-8 shrink-0 items-center justify-center rounded-full border bg-[rgba(48,92,58,0.12)]"
          }
        >
          <Bot className={"text-primary size-3.5"} />
        </div>
        <div className={"text-foreground max-w-full text-sm leading-[1.4] font-normal break-words whitespace-normal"}>
          <Streamdown>{content}</Streamdown>
        </div>
      </div>
    </div>
  );
}