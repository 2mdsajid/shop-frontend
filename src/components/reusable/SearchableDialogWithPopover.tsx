import { Button } from '../ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { ChevronsUpDown } from 'lucide-react'
import React from 'react'

type Props = {
    value: string
    options?: string[]
    label: string
    setValueState : React.Dispatch<React.SetStateAction<string>>
}

const SearchableDialogWithPopover = (props: Props) => {
    const { options, value, label, setValueState } = props
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between">
                    {value
                        ? value
                        : label}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 " />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 h-[40vh]">
                <Command >
                    <CommandInput placeholder="Search" />
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup className='w-[20vh]'>
                        {options && options.map((c) => (
                            <CommandItem
                                key={c}
                                value={c}
                                onSelect={(currentValue) => {
                                    setValueState(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}>
                                {c}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default SearchableDialogWithPopover