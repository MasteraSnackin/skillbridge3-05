import { Upload, File, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface SharedFile {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
}

export const FileSharing = () => {
  const [files, setFiles] = useState<SharedFile[]>([
    {
      id: "1",
      name: "project-specs.pdf",
      size: "2.4 MB",
      uploadedAt: "2024-02-20",
    },
    {
      id: "2",
      name: "design-assets.zip",
      size: "15.7 MB",
      uploadedAt: "2024-02-19",
    },
  ]);

  const removeFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shared Files</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="w-full mb-4">
          <Upload className="mr-2 h-4 w-4" /> Upload Files
        </Button>
        <div className="space-y-3">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <File className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">{file.name}</div>
                  <div className="text-sm text-gray-500">
                    {file.size} • {file.uploadedAt}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFile(file.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};