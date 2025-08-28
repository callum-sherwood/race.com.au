"use client";
import cn from "@/core/utils/class-names";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Button } from "rizzui/button";
import { Select, SelectOption } from "rizzui/select";
import { Textarea } from "rizzui/textarea";

type Props = {
  className?: string;
  comments_count: number;
};

const Comments = ({ className, comments_count }: Props) => {
  const [sort, setSort] = useState<SelectOption | null>(null);
  const [showComments, setShowComments] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const options: SelectOption[] = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
  ];

  const handlePost = () => {
    if (commentInput.trim()) {
      setComments([commentInput, ...comments]);
      setCommentInput("");
      setShowForm(false);
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <p className="text-base font-medium">
          Comments ({comments.length || comments_count})
        </p>
        <Button
          variant="text"
          className="p-0 m-0 border-0 cursor-pointer text-base font-medium flex items-center gap-1"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? "Hide" : "Show"}
          <Icon
            icon={
              showComments
                ? "iconamoon:arrow-up-2-light"
                : "iconamoon:arrow-down-2-light"
            }
            height={18}
            width={18}
            className="text-brand-green"
          />
        </Button>
      </div>

      {showComments && (
        <>
          {!showForm ? (
            <div
              className="bg-gradient-to-r from-brand-green to-[#0B1D02] text-center rounded-xl cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              <p className="font-medium text-base text-white py-3">
                Join The Conversation
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <Textarea
                placeholder="Write your comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCommentInput("");
                    setShowForm(false);
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handlePost}>Post</Button>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <p className="text-base font-medium flex-none">All Comments</p>
            <div>
              <Select
                options={options}
                value={sort || options[0]}
                onChange={(v: SelectOption) => setSort(v)}
                prefix="Sort: "
                variant="flat"
                className={cn("bg-[#EFEFEF] rounded-full")}
                dropdownClassName="w-32 bg-white border-0 shadow-lg"
                optionClassName="hover:bg-[#EFEFEF]"
                suffix={
                  <Icon
                    icon="iconamoon:arrow-down-2-light"
                    height={18}
                    width={18}
                  />
                }
              />
            </div>
          </div>

          <div className="space-y-3 mt-3">
            {comments.length === 0 ? (
              <p className="text-gray-500 text-sm">No comments yet.</p>
            ) : (
              comments.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3 border rounded-lg bg-white shadow-sm text-sm"
                >
                  {c}
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
