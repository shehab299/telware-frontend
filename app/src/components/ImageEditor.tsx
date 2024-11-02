import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";
import styled from "styled-components";

const StyledContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

function ImageEditor({
  isOpen,
  closeImgEditor,
  src,
  onImageSave,
  isProfileImage,
}: {
  isOpen: boolean;
  closeImgEditor: () => void;
  src: string;
  onImageSave: (file: File) => void;
  isProfileImage?: boolean;
}) {
  const handleSave = async (editedImageObject: { imageBase64?: string }) => {
    if (editedImageObject.imageBase64) {
      const response = await fetch(editedImageObject.imageBase64);
      const blob = await response.blob();

      const file = new File([blob], "edited-image.jpg", {
        type: "image/jpeg",
        lastModified: Date.now(),
      });

      onImageSave(file);
      closeImgEditor();
    } else {
      console.error("Image base64 data is undefined");
    }
  };
  return (
    <StyledContainer $isOpen={isOpen}>
      {isOpen && (
        <div>
          <FilerobotImageEditor
            source={src}
            onSave={(editedImageObject) => handleSave(editedImageObject)}
            onClose={closeImgEditor}
            annotationsCommon={{
              fill: "#ff0000",
            }}
            Text={{ text: "I Love TelWare" }}
            Rotate={{ angle: 90, componentType: "slider" }}
            Crop={
              isProfileImage
                ? {
                    minWidth: 180,
                    minHeight: 180,
                  }
                : {
                    presetsItems: [
                      {
                        titleKey: "classicTv",
                        descriptionKey: "4:3",
                        ratio: 4 / 3,
                        // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
                      },
                      {
                        titleKey: "cinemascope",
                        descriptionKey: "21:9",
                        ratio: 21 / 9,
                        // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
                      },
                    ],
                    presetsFolders: [
                      {
                        titleKey: "socialMedia", // will be translated into Social Media as backend contains this translation key
                        // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                        groups: [
                          {
                            titleKey: "facebook",
                            items: [
                              {
                                titleKey: "profile",
                                width: 180,
                                height: 180,
                                descriptionKey: "fbProfileSize",
                              },
                              {
                                titleKey: "coverPhoto",
                                width: 820,
                                height: 312,
                                descriptionKey: "fbCoverPhotoSize",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  }
            }
            theme={{
              palette: {
                warning: "#ff0000c0",
                "warning-active": "#ff0000",
                "warning-hover": "#ff0000",
              },
            }}
            tabsIds={[TABS.ADJUST, TABS.ANNOTATE]} // or {['Adjust', 'Annotate', 'Watermark']}
            defaultTabId={isProfileImage ? TABS.ADJUST : TABS.ANNOTATE} // or 'Annotate'
            defaultToolId={TOOLS.TEXT} // or 'Text'
            savingPixelRatio={4}
            previewPixelRatio={window.devicePixelRatio}
          />
        </div>
      )}
    </StyledContainer>
  );
}

export default ImageEditor;
