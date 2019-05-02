var documenterSearchIndex = {"docs":
[{"location":"#JuSDL-1","page":"JuSDL","title":"JuSDL","text":"","category":"section"},{"location":"#","page":"JuSDL","title":"JuSDL","text":"JuSDL documentation.","category":"page"},{"location":"#","page":"JuSDL","title":"JuSDL","text":"Pages = [\n    \"manual/callback.md\"\n    \"manual/buffer.md\"\n    ]","category":"page"},{"location":"manual/buffers/#Buffer-1","page":"Buffer","title":"Buffer","text":"","category":"section"},{"location":"manual/buffers/#","page":"Buffer","title":"Buffer","text":"DocTestSetup  = quote\n    using JuSDL\nend","category":"page"},{"location":"manual/buffers/#","page":"Buffer","title":"Buffer","text":"Buffer","category":"page"},{"location":"manual/buffers/#JuSDL.Utilities.Buffer","page":"Buffer","title":"JuSDL.Utilities.Buffer","text":"Buffer{T, N} <: AbstractBuffer{T, N}\n\nN dimensional Buffer with element type T.\n\nBuffer(::Type{T}, shape::Int...; [mode::Symbol, [callbacks::Vector{Callback}, [name;;String]]])\n\nConstructs a Buffer of shape shape and element type T. callbacks is the vector of additional callbacks for event monitoring capability and name is the name of Buffer. mode is the mode of the buffer with the following properties:\n\nnormal: Data can be written into buffer until the buffer is full. When the buffer is full, no more writing is possible. When read, the last written element is returned without deleting the returned element.\ncyclic: Data can be written into buffer until the buffer is full. When the buffer is full, data is written into the the buffer after shifting the buffer data to right. When read, the last written element is returned without deleting the returned element.\nlifo: Data can be written into buffer until the buffer is full. When the buffer is full, no more writing is possible. When read, last element written to the buffer is returned by deleting the returned element.\nfifo: Data can be written into buffer until the buffer is full. When the buffer is full, no more writing is possible. When read, fist element written to the buffer is returned by deleting the returned element.\n\nBuffer(shape::Int..., [mode::Symbol, [callbacks::Vector{Callback}, [name::String]]])\n\nConstructs a Buffer of shapeshape`\n\n\n\n\n\n","category":"type"},{"location":"manual/callback/#Callback-1","page":"Callback","title":"Callback","text":"","category":"section"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"DocTestSetup  = quote\n    using JuSDL\nend","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"Callbacks are used to monitor the existence of a specific events and if that specific event occurs, some other special jobs are invoked. Callbacks are intended to provide additional monitoring capability to any user-defined composite types. As such, Callbacks are generaly fields of user defined composite types objects. When a Callback is called, if the Callback is enabled and its condition function returns true, then its action function is invoked. ","category":"page"},{"location":"manual/callback/#Callback-Construction-1","page":"Callback","title":"Callback Construction","text":"","category":"section"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"Callback","category":"page"},{"location":"manual/callback/#JuSDL.Utilities.Callback","page":"Callback","title":"JuSDL.Utilities.Callback","text":"Callback[condition, action, [enabled::Bool, [name::String]])\n\nConstructs a Callback with condition and action. condition is a single-argument function that returns true when a specific event occurs and return false, otherwise. action is a single-argument function that performs some specific job. When enabled is false, action is deactivated. name is the name of the Callback.  Expected syntax for condition function  is \n\n    function condition(obj) -> Bool \n        Even occured ? \n            return true \n        Else \n            return false\n    end\n\nand the expected signature for the action function is \n\n    function action(obj)\n        Do whatever you want with obj.\n    end\n\n\n\n\n\n","category":"type"},{"location":"manual/callback/#Callback-Control-1","page":"Callback","title":"Callback Control","text":"","category":"section"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"A  Callback can be controlled, i.e., activated and deactivated.","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"enable!\ndisable!","category":"page"},{"location":"manual/callback/#JuSDL.Utilities.enable!","page":"Callback","title":"JuSDL.Utilities.enable!","text":"enable!(clb::Callback)\n\nEnables clb. If clb is enabled, clb.action is activated.\n\n\n\n\n\n","category":"function"},{"location":"manual/callback/#JuSDL.Utilities.disable!","page":"Callback","title":"JuSDL.Utilities.disable!","text":"disable!(clb:Callback)\n\nDisables clb. If clb is disabled, clb.action is deactivated.\n\n\n\n\n\n","category":"function"},{"location":"manual/callback/#A-Simple-Example-1","page":"Callback","title":"A Simple Example","text":"","category":"section"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"Let's define a test object first that has a field named x of type Int and named callback of type Callback. ","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"julia> mutable struct TestObject\n       x::Int\n       callback::Callback\n       end","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"To construct an instance of TestObject, we need to construct a Callback. For that purpose, condition and action function must be defined. For this example, condition checks whether the x field is positive, and action prints a simple message saying that the x field is positive.","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"julia> condition(testobject) = testobject.x > 0 \ncondition (generic function with 1 method)\n\njulia> action(testobject) = println(\"testobject.x is greater than zero\") \naction (generic function with 1 method)","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"Now a test object can be constructed","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"julia> testobject = TestObject(-1, Callback(condition, action))  \nTestObject(-1, Callback{typeof(condition),typeof(action)}(condition, action, true, \"dac6f9eb-6daa-4622-a8fa-623f0f88780c\"))","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"If the callback is called, no action is performed since the condition function returns false. Note the argument sent to the callback. The instance of the TestObject to which the callback is a bound.","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"julia> testobject.callback(testobject) ","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"Now mutate the test object so that condition returns true.","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"julia> testobject.x = 3   \n3","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"Now, if the callback is called, since the condition returns true and the callback is enabled, the action is invoked.","category":"page"},{"location":"manual/callback/#","page":"Callback","title":"Callback","text":"julia> testobject.callback(testobject) \ntestobject.x is greater than zero","category":"page"}]
}
