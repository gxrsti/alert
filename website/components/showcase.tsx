interface ShowcaseSectionProps {
  position: string;
  setPosition: (position: string) => void;
}

export const ShowcaseSection = ({ position, setPosition }: ShowcaseSectionProps) => {
  return (
    <>
      {/*
      <div className="flex gap-4">
        <Button variant="secondary" onClick={() => toast('This is a default toast')}>
          Default
        </Button>
        <Button variant="secondary" onClick={() => toast.success('This is a success toast')}>
          Success
        </Button>
        <Button variant="secondary" onClick={() => toast.error('This is a error toast')}>
          Error
        </Button>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Select
          value={position}
          onValueChange={(s) => {
            setPosition(s as ToasterPosition);
          }}
        >
          <SelectTrigger style={{ color: 'black' }} className="w-[180px] h-[auto]">
            <SelectValue placeholder="Select Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Positions</SelectLabel>
              <SelectItem value="top-left">top-left</SelectItem>
              <SelectItem value="top-center">top-center</SelectItem>
              <SelectItem value="top-right">top-right</SelectItem>
              <SelectItem value="bottom-left">bottom-left</SelectItem>
              <SelectItem value="bottom-center">bottom-center</SelectItem>
              <SelectItem value="bottom-right">bottom-right</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Switch id="reverse" checked={reverse} onCheckedChange={() => setReverse((reverse) => !reverse)} />
          <Label className="text-gray-900" htmlFor="reverse">
            Reverse
          </Label>
        </div>

        <Select
          value={theme}
          onValueChange={(s) => {
            setTheme(s as 'light' | 'dark');
          }}
        >
          <SelectTrigger style={{ color: 'black' }} className="w-[180px] h-[auto]">
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Themes</SelectLabel>
              <SelectItem value="light">Light Theme</SelectItem>
              <SelectItem value="dark">Dark Theme</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
        */}
    </>
  );
};
